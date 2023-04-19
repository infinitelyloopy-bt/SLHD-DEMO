import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "It is only my wife and I and we don’t have children. What is the basic cover we can start with?",
        value: "It is only my wife and I and we don’t have children. What is the basic cover we can start with?"
    },
    { text: "Tell me more about the business results in the 2022 investor update", value: "Tell me more about the business results in the 2022 investor update" },
    { text: "What is the waiting period for the Simple Hospital Basic Plus cover?", value: "What is the waiting period for the Simple Hospital Basic Plus cover?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
