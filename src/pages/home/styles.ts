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
    fontSize: 16,
    height: 50,
    borderRadius: 8,
    flex: 1,
  },

  button: {
    backgroundColor: '#d90429',
    padding: 12,
    borderRadius: 6,
    marginLeft: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  list: {
    padding: 12,
    marginTop: 30,
  },

  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: '#E4E4E4',
  },

  infoText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },

  infoSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});