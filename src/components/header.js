import React,{Component} from 'react';
// const Header = ()=>{
//     return <div>Header</div>
// }

class Header extends Component{
    inputChange(event){
        console.log(event.target.value);
    }
    render(){
     
       
        return(
            <header>
                <div className="logo"
                onClick={()=>{console.log('clicked')}}
                >Logo</div>
                <input onChange={this.inputChange}/>
            </header>
        )
    }
}
export default Header;