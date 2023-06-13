import React from 'react';
import { Text, } from 'react-native';

interface Props {
    text: String;
    textStyle: any;
}

const BaseText = ({ text, textStyle }: Props) => {
    return (
        <Text style={textStyle}>{text}</Text>
    )
};

export default BaseText;
