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

import { carouselItem } from '../../carouselData/onboardData'
import { PADDING, WIDTH } from '../../constants/constants'

const viewConfigRef = { viewAreaCoveragePercentThreshold: 95 }

export const Carousel = (props: CarouselPropsType) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  let flatListRef = useRef<FlatList<OnboardDataType> | null>()

  const onViewRef = useRef(({ changed }: { changed: any }) => {
    props.setView(changed[0].index)
    if (changed[0].isViewable) {
      setCurrentIndex(changed[0].index)
    }
  })

  const renderItems: React.FC<{ item: OnboardDataType }> = ({ item }) => {
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
          />
        ))}
      </View>
    </View>
  )
}

type CarouselPropsType = {
  setView: (index: number) => void
}

type OnboardDataType = {
  title: string
  description: string
  url: ImageSourcePropType
}

const styles = StyleSheet.create({
  container: {
    width: WIDTH - PADDING * 2,
    maxWidth: 360,
  },
  carousel: {},
  image: {
    width: WIDTH - PADDING * 2,
    maxWidth: 360,
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
    maxWidth: 360,
    textAlign: 'center',
    paddingBottom: 15,
  },
  description: {
    fontWeight: '400',
    fontSize: 16,
    color: '#FFF',
    textAlign: 'center',
    width: WIDTH - PADDING * 2,
    maxWidth: 360,
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
