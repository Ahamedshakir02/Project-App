import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import projects from './project.json';

function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Hey, Leri Kuns</Text>
        <Image
          source={{ uri: 'https://your-image-url.com/profile-pic.jpg' }}
          style={styles.profilePic}
        />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search projects..."
        />
        <TouchableOpacity style={styles.filterIcon}>
          <Ionicons name="filter" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Recent Searches */}
      <View style={styles.recentSearches}>
        <ScrollView horizontal>
          {['UI Design', 'Landing Page', 'Banner Design'].map((tag) => (
            <TouchableOpacity key={tag} style={styles.searchTag}>
              <Text>{tag}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Project List */}
      <FlatList
        data={projects}
        renderItem={({ item }) => (
          <View style={styles.projectItem}>
            <Text style={styles.location}>{item.location}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{`${item.price} - ${item.duration} - ${item.proposals} Proposals`}</Text>
            <View style={styles.tags}>
              {item.tags.map((tag) => (
                <Text key={tag} style={styles.tag}>{tag}</Text>
              ))}
            </View>
          </View>
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
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Category') {
              iconName = 'list';
            } else if (route.name === 'Saved') {
              iconName = 'bookmark';
            } else if (route.name === 'Profile') {
              iconName = 'person';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Category" component={CategoryScreen} />
        <Tab.Screen name="Saved" component={SavedScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
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
    fontSize: 18,
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
    padding: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
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
    borderColor: '#eee',
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
});
