import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, FlatList, Switch } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import projects from './project.json';

function HomeScreen() {
  const [expandedProjectId, setExpandedProjectId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedProjectId(expandedProjectId === id ? null : id);
  };

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.greeting}>Hey, Ahamdd Shakir</Text>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6PWiT4jbOgFjpAy0ROofuZ4PS8AzvDqqlDw&usqp=CAU' }}
          style={styles.profilePic}
        />
        
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search projects..."
        />
        <TouchableOpacity style={styles.filterIcon}>
          <Ionicons name="filter" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.recentSearches}>
        <ScrollView horizontal>
          {['Education', 'Sustainability', 'Banner Design'].map((tag) => (
            <TouchableOpacity key={tag} style={styles.searchTag}>
              <Text>{tag}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>


      <FlatList
        data={projects}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => toggleExpand(item.id)}>
            <View style={styles.projectItem}>
              <Text style={styles.location}>{item.location}</Text>
              <Text style={styles.title}>{item.title}</Text>
              <Text>{`$${item.amount} - ${item.duration} - ${item.proposals} Proposals`}</Text>
              <View style={styles.tags}>
                {item.tags.map((tag) => (
                  <Text key={tag} style={styles.tag}>{tag}</Text>
                ))}
              </View>
              {expandedProjectId === item.id && (
                <Text style={styles.description}>{item.description}</Text>
              )}
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

function CategoryScreen() {
  return (
    <View style={styles.centered}>
      <Text>Category Screen</Text>
    </View>
  );
}

function SavedScreen() {
  return (
    <View style={styles.centered}>
      <Text>Saved Screen</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.centered}>
      <Text>Profile Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
            tabBarLabel: 'Home',
          }}
        />
        <Tab.Screen 
          name="Category" 
          component={CategoryScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="list" size={size} color={color} />
            ),
            tabBarLabel: 'Category',
          }}
        />
        <Tab.Screen 
          name="Saved" 
          component={SavedScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="bookmark" size={size} color={color} />
            ),
            tabBarLabel: 'Saved',
          }}
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
            tabBarLabel: 'Profile',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6,
    borderColor: '#ccc',
    borderWidth: 2,
    borderRadius: 100,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
  },
  filterIcon: {
    padding: 8,
  },
  recentSearches: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  searchTag: {
    marginRight: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 16,
    backgroundColor: '#e0e0e0',
  },
  projectItem: {
    padding: 16,
    marginBottom: 16,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
  },
  location: {
    fontSize: 14,
    color: '#888',
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  tags: {
    flexDirection: 'row',
    marginTop: 8,
  },
  tag: {
    marginRight: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 16,
    backgroundColor: '#f0f0f0',
  },
  description: {
    marginTop: 12,
    fontSize: 14,
    color: '#555',
  },
});
