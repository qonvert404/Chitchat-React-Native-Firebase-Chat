import { StyleSheet } from 'react-native';

const button = {
  alignItems: 'center',
  justifyContent: 'center',
  height: 40,
  marginHorizontal: 5,
  marginVertical: 5,
  borderRadius: 5,
  padding: 3
};

export const styles = StyleSheet.create({
  container : {
    backgroundColor:'#e6fff2',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  textInput: {
    backgroundColor: '#ffffff',
    padding: 10,
    height: 40,
    marginLeft: 63,
    margin: 10,
    borderRadius: 5,
    width: 300,
    alignItems: 'center',
    fontFamily: 'Avenir',
  },

  
  button: {
    ...button,
    height: 60,
    marginRight:40,
    marginLeft:87,
    marginTop:30,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#3bd1b3',
    borderRadius:10,
    
    width: 250
  },

  
  signUpButton: {
    ...button,
    height: 40,
    marginRight:40,
    marginLeft:112,
    marginTop:40,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#138a72',
    borderRadius:10,
    width: 200
  },
  title: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Avenir',
  },
  loginBox: {
    padding: 30,
    paddingBottom: 400,
    
  },
  imageBox: {
    paddingBottom: 10,
    alignItems: 'center',
  },
  bottomContainer : {
    backgroundColor:'#3bd1b3',
    flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:60,
    flexDirection:'row',
    marginTop: 40,
    marginRight: 25,
    marginBottom: 100,
    width: 400,
    height: 200  
  },

  bottomContainer2 : {
    backgroundColor:'#3bd1b3',
    flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:60,
    flexDirection:'row',
    marginTop: 55,
    marginRight: 20,
    marginBottom: 80,
    width: 400,
    height: 200

  },
  image: {
    width: 300,
    height: 300
  },
  scrollView: {
    backgroundColor: '#e6fff2',
  },
  
});
