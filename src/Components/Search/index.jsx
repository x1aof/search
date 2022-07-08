import React, { Component } from 'react'
import axios from 'axios'
export default class Search extends Component {

  search =()=>{
//取input的输入(连续解构赋值+重命名)
    const {keyWordElement:{value:keyWord}} = this
//发送网络请求
//https://api.github.com/search/users?q={query}{&page,per_page,sort,order}
    axios.get(`api1/search/users?q=${keyWord}`).then(
      response =>{return this.props.saveUsers(response.data.items),
      console.log(response.data)},
      error =>{ return console.log('失败了',error);}
    )
  }

  render() {
		return (
			<section className="jumbotron">
				<h3 className="jumbotron-heading">搜索github用户</h3>
				<div>
					<input ref={c => (this.keyWordElement = c)} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
					<button onClick={this.search}>搜索</button>
				</div>
			</section>
		)
	}
}
