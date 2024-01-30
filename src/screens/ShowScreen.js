import React, { useContext } from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Context } from "../context/BlogContext";
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({navigation, route}) => {
    const { state } = useContext(Context);
    const {id} = route.params

    React.useEffect(() => {
        // Use `setOptions` to update the button that we previously specified
        // Now the button includes an `onPress` handler to update the count
        navigation.setOptions({
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Edit",{id: id})}>
                <EvilIcons name="pencil" size={35} />
            </TouchableOpacity>
          ),
        });
      }, [navigation]);

    const blogPost = state.find(
        blogPost => blogPost.id === id
    );

    console.log(id);
    return ( <View>
        <Text> {blogPost.title}</Text>
        <Text> {blogPost.content}</Text>
    </View> );
}

const styles = StyleSheet.create({
    
})

export default ShowScreen;