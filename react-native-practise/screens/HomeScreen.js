import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
import react, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { theme } from '../theme';
import tw from 'twrnc';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { MapPinIcon } from 'react-native-heroicons/solid'
export default function HomeScreen() {
    const [showSeacrh, setShowSearch] = react.useState(false)
    const [locations, setLocations] = useState([1, 2, 3])

    const handleLocation = (location) => {
        console.log(location)
    }
    return (
        <View style={tw`flex-1 relative`}>
            <StatusBar style={tw`light`} />
            <Image blurRadius={5} source={require('../assets/images/bg.jpeg')}
                style={tw`w-full h-full absolute`}
            />
            <SafeAreaView style={tw`flex flex-1`}>
                {/* search section */}
                <View style={tw`mx-4 relative z-50`}>
                    <View style={tw`flex-row justify-end items-center rounded-full`}>
                        {showSeacrh ? (
                            <TextInput
                                placeholder='search city'
                                placeholderTextColor={'black'}
                                style={tw`pl-6 h-10 pb-1 flex-1 text-base text-white mt-8 bg-white rounded-full opacity-40`}
                            />
                        ) : null}

                        <TouchableOpacity
                            onPress={() => setShowSearch(!showSeacrh)}
                            style={tw`rounded-full mt-8 p-3 bg-white opacity-40`}
                        >
                            <MagnifyingGlassIcon size={20} color="black" />
                        </TouchableOpacity>
                    </View>
                    {
                        locations.length > 0 && showSeacrh === true ? (
                            <View style={tw`absolute w-full bg-gray-300 top-20 rounded-3xl`}>
                                {
                                    locations.map((location, index) => {
                                        let showBorder = index + 1 !== locations.length;
                                        let borderClass = showBorder ? 'border-b-2 border-gray-400' : '';
                                        return (
                                            <TouchableOpacity key={index}
                                                onPress={() => handleLocation(location)}
                                                style={tw`flex-row items-center border-0 p-3 px-4 mb-1 ${borderClass}`}>
                                                <MapPinIcon size={20} color='black' />
                                                <Text style={tw`ml-2 text-lg text-black`}>
                                                    London, United Kingdom
                                                </Text>
                                            </TouchableOpacity>
                                        );
                                    })
                                }
                            </View>
                        ) : null
                    }
                </View>
                {/* forecast section */}
                <View style={tw`flex-1 mx-4 justify-around mb-2 flex`} >
                    {/* location */}
                    <Text style={tw`text-2xl text-white font-bold text-center`} >
                        London,
                        <Text style={tw`text-lg text-gray-300 font-semibold`}>
                            United Kingdom
                        </Text>
                    </Text>
                    {/* weather image */}
                    <View style={tw`flex-row justify-center`}>
                        <Image 
                            source={require('../assets/images/sunny2.jpg')}
                            style={tw`w-52 h-52`}
                        />
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}