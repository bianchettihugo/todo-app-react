import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    backgroundColor: '#f7f7f7',
    flex: 1,
    width: "100%",
    color: 'black',
  },

  header: {
    backgroundColor: '#d90429',
    width: '100%',
    justifyContent: 'space-around',
    paddingTop: 50,
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },

  title: {
    fontSize: 21,
    fontWeight: 'bold',
    color: 'white',
  },

  bottom: {
    marginBottom: 20,
    padding: 12,
    flexDirection: 'row',
  },

  input: {
    backgroundColor: 'white',
    padding: 12,
    fontSize: 14,
    height: 50,
    borderRadius: 8,
    flex: 1,
  }
});