import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// Create a context to store the user's profile data
const UserContext = React.createContext();

// A component that updates the user's profile data
const EditProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { user, setUser } = useContext(UserContext);

  const saveProfile = () => {
    const updatedUser = { ...user, name, email };
    setUser(updatedUser);
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Name" />
      <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Email" />
      <Button title="Save" onPress={saveProfile} />
    </View>
  );
};

// A component that displays the user's profile data
const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <Text style={styles.text}>{user.name}</Text>
      <Text style={styles.label}>Email:</Text>
      <Text style={styles.text}>{user.email}</Text>
      <EditProfile />
    </View>
  );
};

// The top-level component that sets up the context
const App = () => {
  const [user, setUser] = useState({ name: '', email: '' });

  return (
    <View style={styles.container}>
      <UserContext.Provider value={{ user, setUser }}>
        <Profile />
      </UserContext.Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    marginBottom: 10,
  },
});

export default App;
