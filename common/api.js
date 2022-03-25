import {baseUrl} from './config.js'

export function topList(){
	
	let listIds=['19723756','3779629','2884035','3778678'];
	
	return new Promise(function(resolve,reject){
		uni.request({  //排行榜
			url:`${baseUrl}/toplist/detail`,
			method:'GET',
			success:res=>{
				let result=res.data.list;
				result.length=4;
				for(let i=0;i<listIds.length;i++){
					result[i].listId=result[i].id;
				}
				resolve(result)
			},
			fail:(err)=>{console.log(err)},
			complete:()=>{}
		});
	});
	
}

export function list(listId){
	return uni.request({ //排行榜详情
		url: `${baseUrl}/playlist/detail?id=${listId}`,
		method: 'GET'
	});
}

// http://localhost:3000/song/detail?ids=344442	//歌曲详情
export function songDetail(songId){
	return uni.request({ 
		url: `${baseUrl}/song/detail?ids=${songId}`,
		method: 'GET'
	});
}

// http://localhost:3000/simi/song?id=347230	//相似歌曲
export function songSimi(songId){
	return uni.request({ 
		url: `${baseUrl}/simi/song?id=${songId}`,
		method: 'GET'
	});
}

// http://localhost:3000/comment/music?id=483937795	评论
export function songComment(songId){
	return uni.request({ 
		url: `${baseUrl}/comment/music?id=${songId}`,
		method: 'GET'
	});
}

// http://localhost:3000/lyric?id=33894312	歌词
export function songLyric(songId){
	return uni.request({ 
		url: `${baseUrl}/lyric?id=${songId}`,
		method: 'GET'
	});
}

// http://localhost:3000/song/url?id=405998841	//音频地址
export function songUrl(songId){
	return uni.request({ 
		url: `${baseUrl}/song/url?id=${songId}`,
		method: 'GET'
	});
}

// http://localhost:3000/search/hot/detail	//热搜列表
export function searchHot(){
	return uni.request({ 
		url: `${baseUrl}/search/hot/detail`,
		method: 'GET'
	});
}

// http://localhost:3000/search?keywords=海阔天空	//搜索结果
export function searchWord(word){
	return uni.request({ 
		url: `${baseUrl}/search?keywords=${word}`,
		method: 'GET'
	});
}

// http://localhost:3000/search/suggest?keywords=海阔天空&type=mobile	//搜索建议提示
export function searchSuggest(word){
	return uni.request({ 
		url: `${baseUrl}/suggest?keywords=${word}&type=mobile`,
		method: 'GET'
	});
}