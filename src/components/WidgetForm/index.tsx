import { CloseButton } from "../CloseButton";
import { FeedbackTypeStep } from "./FeedbackTypeStep";

import bugImgUrl from "../../assets/bug.svg";
import ideaImgUrl from "../../assets/idea.svg";
import thoughtImgUrl from "../../assets/thought.svg";

import { useState } from "react";
import { FeedbackContentStep } from "./FeedbackContentStep";
import { FeedbackSucessStep } from "./FeedbackSucessStep";

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImgUrl,
            alt: 'Imagem de um inseto'
        },
    },
    
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImgUrl,
            alt: 'Imagem de um inseto'
        },
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImgUrl,
            alt: 'Imagem de um inseto'
        },
    }
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false);

    function handleRestartFeedback() {
        setFeedbackSent(false);
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex  flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

            {feedbackSent ? (
                <FeedbackSucessStep onFeedbackRestartRequest={handleRestartFeedback} />
            ):(
                <>
                {!feedbackType ? (
                    <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
                ) : (
                    <FeedbackContentStep 
                    feedbackType={feedbackType} 
                    onFeedbackTypeRestartRequest={handleRestartFeedback}
                    onFeedbackSent={() => setFeedbackSent(true)}
                    />
                )}
                </>
            )}

            <footer className="text-xs text-neutral-400">
                Feito com ♥ pela <a className="underline underline-offset-2" href="rocketseat.com.br"> Rocketseat </a>
            </footer>
        </div>
    );
}