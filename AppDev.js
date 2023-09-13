import React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';

const booksData = [
  { id: '1', title: 'Book 1', author: 'Author 1' },
  { id: '2', title: 'Book 2', author: 'Author 2' },
  // Add more book entries as needed
];

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Thobeka's Book List</Text>
      <Button
        title="Add Book"
        onPress={() => navigation.navigate('AddBook')}
      />

      <FlatList
        data={booksData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('EditBook', { book: item })}
          >
            <Text>{item.title}</Text>
            <Text>{item.author}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;
