import React from 'react'

import { FlatList, Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'

import { offerDataCarousel } from '../../../carouselData/onboardData'

export const OffersCarousel = () => {
  const renderItem: React.FC<{ item: OffersCarouselDataType }> = ({ item }) => {
    return (
      <View style={styles.itemBox}>
        <Image source={item.backgroundImg} style={styles.backgroundImg} />
        <Image source={item.url} style={styles.itemImg} />
        <Text style={styles.description}>{item.description}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        data={offerDataCarousel}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // marginBottom: 100,
  },
  itemBox: {
    width: 244,
    height: 320,
    marginRight: 10,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImg: {
    position: 'absolute',
    left: 0,
    top: 0,
    borderRadius: 20,
    width: 244,
    height: 320,
  },
  itemImg: {
    width: 219,
    height: 259,
  },
  description: {
    fontWeight: '600',
    fontSize: 18,
    color: '#FFF',
    paddingBottom: 20,
    letterSpacing: 0.04,
  },
})

export type OffersCarouselDataType = {
  description: string
  url: ImageSourcePropType
  backgroundImg: ImageSourcePropType
}
