import type {ForwardedRef} from 'react';
import React, {forwardRef} from 'react';
import type {Text as RNText} from 'react-native';
import useThemeStyles from '@hooks/useThemeStyles';
import type {MaybePhraseKey} from '@libs/Localize';
import FormHelpMessage from './FormHelpMessage';
import type {Choice} from './RadioButtons';
import RadioButtons from './RadioButtons';
import Text from './Text';

type SingleChoiceQuestionProps = {
    prompt: string;
    errorText?: MaybePhraseKey;
    possibleAnswers: Choice[];
    currentQuestionIndex: number;
    onInputChange: (value: string) => void;
};

function SingleChoiceQuestion({prompt, errorText, possibleAnswers, currentQuestionIndex, onInputChange}: SingleChoiceQuestionProps, ref: ForwardedRef<RNText>) {
    const styles = useThemeStyles();

    return (
        <>
            <Text
                ref={ref}
                style={[styles.textStrong, styles.mb5]}
            >
                {prompt}
            </Text>
            <RadioButtons
                items={possibleAnswers}
                key={currentQuestionIndex}
                onPress={onInputChange}
            />
            <FormHelpMessage message={errorText} />
        </>
    );
}

SingleChoiceQuestion.displayName = 'SingleChoiceQuestion';

export default forwardRef(SingleChoiceQuestion);
