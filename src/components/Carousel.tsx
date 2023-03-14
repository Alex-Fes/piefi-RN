import React, { useRef, useState } from 'react'

import {
  FlatList,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import { PADDING, WIDTH } from '../constants/constants'

//const carouselItem = require('../carouselData/onboardData.json')
const carouselItem = [
  {
    title: 'Приветствуем в Piefi!',
    description:
      'Оплачивайте покупки по всему миру с помощью виртуального счета, криптовалюты или карты.',
    url: require('../../assets/onboardFirstImg.png'),
  },
  {
    title: 'Инвестиции',
    description:
      'Инвестируйте в привычные финансовые инструменты или в криптовалюту с повышенной процентной ставкой.',
    url: require('../../assets/onboardSecondImg.png'),
  },
]

export const Carousel = () => {
  const viewConfigRef = { viewAreaCoveragePercentThreshold: 95 }
  const [currentIndex, setCurrentIndex] = useState(0)
  let flatListRef = useRef<FlatList<onboardDataType> | null>()

  const onViewRef = useRef(({ changed }: { changed: any }) => {
    if (changed[0].isVisible) {
      setCurrentIndex(changed[0].index)
    }
  })
  const scrollToIndex = (index: number) => {
    flatListRef.current?.scrollToIndex({ animated: true, index: index })
  }

  const renderItems: React.FC<{ item: onboardDataType }> = ({ item }) => {
    return (
      <TouchableOpacity activeOpacity={1}>
        <Image source={item.url} style={styles.image} />
        <View style={styles.footer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={carouselItem}
        renderItem={renderItems}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        style={styles.carousel}
        ref={ref => {
          flatListRef.current = ref
        }}
        viewabilityConfig={viewConfigRef}
        onViewableItemsChanged={onViewRef.current}
      />

      <View style={styles.dotView}>
        {carouselItem.map((_, index) => (
          <TouchableOpacity
            key={index.toString()}
            style={[
              styles.circle,
              {
                backgroundColor: index === currentIndex ? '#FFF' : 'rgba(255, 255, 255, 0.1)',
              },
            ]}
            onPress={() => scrollToIndex(index)}
          />
        ))}
      </View>
    </View>
  )
}

type onboardDataType = {
  title: string
  description: string
  url: ImageSourcePropType
}

const styles = StyleSheet.create({
  container: {
    width: WIDTH - PADDING * 2,
  },
  carousel: {},
  image: {
    width: WIDTH - PADDING * 2,
    height: 382,
    resizeMode: 'contain',
  },
  footer: {},
  title: {
    // fontFamily: 'TT Wellingtons',
    fontWeight: '700',
    fontSize: 26,
    lineHeight: 40,
    color: '#fff',
    width: WIDTH - PADDING * 2,
    textAlign: 'center',
    paddingBottom: 15,
  },
  description: {
    fontWeight: '400',
    fontSize: 16,
    color: '#FFF',
    textAlign: 'center',
    width: WIDTH - PADDING * 2,
    flexWrap: 'wrap',
  },
  dotView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15,
  },
  circle: {
    width: 10,
    height: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 50,
    marginHorizontal: 5,
  },
})
