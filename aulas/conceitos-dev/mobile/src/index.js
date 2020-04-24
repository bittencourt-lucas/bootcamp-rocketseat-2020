import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';

import api from './services/api';

export default function App() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    })
  }, []);

  async function handleAddProject() {
    const response = await api.post('projects', {
      title: `Projeto ${Date.now()}`,
      owner: 'Lucas Bittencourt',
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />

      <SafeAreaView style={styles.container}>

        <Text style={styles.title}>Hello GoStack!</Text>

        <FlatList
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({ item: project }) => (
            <Text style={styles.project} key={project.id}>{project.title}</Text>
          )}
        />

        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.button}
          onPress={handleAddProject}
        >
          <Text style={styles.buttonText}>Adicionar Projetos</Text>
        </TouchableOpacity>

      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
  },

  title: {
    color: '#FFF',
    fontSize: 32
  },

  project: {
    color: '#FFF',
    fontSize: 20
  },

  button: {
    backgroundColor: '#FFF',
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  }

});