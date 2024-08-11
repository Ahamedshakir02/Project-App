import React, { useState } from 'react';
import { View, Text, Image, TextInput, FlatList, StyleSheet } from 'react-native';
import projects from './project.json';
export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hey, Ahamed Shakir</Text>
        <Image source={{ uri: 'https://your-avatar-url.com' }} style={styles.avatar} />
      </View>

      <TextInput
        style={styles.searchBar}
        placeholder="Search projects..."
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
      />

      <FlatList
        data={projects}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.projectCard}>
            <Text style={styles.projectTitle}>{item.title}</Text>
            <Text style={styles.projectLocation}>{item.location}</Text>
            <Text style={styles.projectDetails}>
              {item.price} - {item.duration} - {item.proposals} Proposals
            </Text>
            <View style={styles.tagContainer}>
              {item.tags.map(tag => (
                <Text style={styles.tag} key={tag}>{tag}</Text>
              ))}
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  greeting: { fontSize: 24, fontWeight: 'bold' },
  avatar: { width: 40, height: 40, borderRadius: 20 },
  searchBar: { padding: 10, borderColor: '#ccc', borderWidth: 1, borderRadius: 8, marginBottom: 20 },
  projectCard: { padding: 15, borderColor: '#ddd', borderWidth: 1, borderRadius: 10, marginBottom: 15 },
  projectTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  projectLocation: { fontSize: 14, color: '#888', marginBottom: 5 },
  projectDetails: { fontSize: 14, color: '#666' },
  tagContainer: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 10 },
  tag: { padding: 5, backgroundColor: '#eee', borderRadius: 5, marginRight: 5, marginBottom: 5 },
});
