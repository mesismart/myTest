import React from 'react';
import { Animated, FlatList, View } from 'react-native';

import ScrollItem from './ScrollItem';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const ScrollList = (props) => {
    const {
        data,
        renderItem,
        distanceBetweenItem: distance,
        ...otherProps
    } = props;
    const y = new Animated.Value(0);
    const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y } } }], {
        useNativeDriver: true,
    });

    let distanceBetweenItem = distance || 8;
    return (
        <AnimatedFlatList
            scrollEventThrottle={1}
            bounces={false}
            data={data}
            showsHorizontalScrollIndicator={false}
            renderItem={(data) => {
                let item = renderItem(data);
                const { index } = data;
                return <ScrollItem {...{ index, y, item, distanceBetweenItem }} />;
            }}
            {...{ onScroll }}
            {...otherProps}
        />
    );
};

export default ScrollList;