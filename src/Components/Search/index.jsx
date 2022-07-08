import React, { Component } from 'react'
import axios from 'axios'
export default class Search extends Component {

  search =()=>{
//取input的输入(连续解构赋值+重命名)
    const {keyWordElement:{value:keyWord}} = this
//发送网络请求
//请求前更新状态
    this.props.updateState({isFirst:false, isLoading:true})

    axios.get(`api1/search/users?q=${keyWord}`).then(
      response =>{
        this.props.updateState({users:response.data.items, isLoading: false,isFirst:false})
      },
      error =>{ 
        this.props.updateState({isLoading:false,err:error.message,isFirst:false})
      }
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
