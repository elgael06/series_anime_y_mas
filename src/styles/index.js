const { StyleSheet } = require("react-native");



const styles = StyleSheet.create({
    app:{
        position:'absolute',
        flex:1,
        backgroundColor:'#393E46',
        top:0,
        bottom:0,
        left:0,
        right:0,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
    imageIcon:{
        position:'absolute',
        height:158,
        top:-94,
        justifyContent:'center',
        alignItems:'center',
        left:70
    },
    input:{
        backgroundColor:'#393E46',
        borderColor:'#EEE',
        color:'#EEE',
        marginTop:36,
        height:42
    },
    buttonPrimary:{
        backgroundColor:'#8621D9',
        marginTop:36,
        left:0,
        flexDirection:'row',
        height:46,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',     
        borderColor:'#EEE',
        borderWidth:1,
        height:42   
    },
    textButon:{
        fontSize:24,
        color:'#EEE',
    },
    actionText:{
        height:42,
        justifyContent:'center',
        alignItems:'center', 
        top:10
    },
    textAction:{
        color:'#EEE',
        fontSize:20,
        lineHeight:23,
    },
    container:{
        backgroundColor:'#222831',
        width:310,
        paddingTop:50,
        borderRadius:15,
        paddingBottom:12,
        paddingLeft:12,
        paddingRight:12, 
        overflow:'scroll'           
    },
    fotter:{
        position:'absolute',
        bottom:8,
        justifyContent:'center',
        alignItems:'center'
    },
    footerText:{
        fontSize:12,
        color:'#EEE'
    },
    textExito:{
        marginTop:55,
        height:120,
        alignItems:'center',
        justifyContent:'center',
        color:'#EEE',
        fontSize:26,
        textAlign:'center'
    },
    floatButton:{
        width:50,
        height:50,
        justifyContent:'flex-end',
        alignSelf:'flex-end',                
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
        margin:10,
        bottom:10
    },
    menuContainer:{
        justifyContent:"center",
        alignItems:'center',  
        marginTop:0,      
    },
    menuTitle:{
       top:-30,
       fontSize:24
    },
    botonMenu:{
        height:45,
        backgroundColor:'rgba(66, 66, 68, 0.5)',
        borderRadius:10,
        width:290,
        justifyContent:'center',
        alignItems:'center',
        marginTop:12
    },
    menuTextBoton:{
        color:'#EEE',
        fontSize:18
    },
    menuBotones:{
        maxHeight:250,
        paddingBottom:35,
        overflow:'scroll'
    }
});

export default styles;