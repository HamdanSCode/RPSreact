import React from 'react';
import BaseText from '../atoms/BaseText';
import { View, } from 'react-native';

// class SectionText {
//     text: string;
//     containerStyle: any;
//     textStyle: any;

//     constructor(text: string, containerStyle: any, style: any) {
//         this.text = text;
//         this.containerStyle = containerStyle
//         this.textStyle = style;
//     }

//     render() {
//         return (
//             <View style={this.containerStyle}>
//                 <BaseText
//                 />
//                 {new BaseText(this.text, this.textStyle).render()}
//             </View>
//         )
//     }
// }

interface Props {
    text: string;
    containerStyle: any;
    textStyle: any;
}

const SectionText = ({ text, containerStyle, textStyle }: Props) => {
    return (
        <View style={containerStyle}>
            <BaseText text={text} textStyle={textStyle} />
        </View>
    )
};


export default SectionText;
