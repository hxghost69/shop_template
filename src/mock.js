// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
const produceNewsData = function() {
    let articles = [];
    for (let i = 0; i < 100; i++) {
        let newArticleObject = {
            title: Random.csentence(5, 30), //  Random.csentence( min, max )
            thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
            date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
        }
        articles.push(newArticleObject)
    }
 
    return {
        articles: articles
    }
}
 
// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('http://api.com/index', 'post', {
    "swiper|4":[
        {
          'imgPath':Random.image('800x400', '#04a1f7', '#FFF', 'png', ''),
          'id':'@id'
        }
      ],
    
      'section1':{
        'list|4':[{
          'imgPath':Random.image('400x400', '#b7ddf2', '#333', 'png', ''),
          'id':'@id'
        }],
        'banner':Random.image('400x100', '#ffcc33', '#FFF', 'png', 's1-banner')
      },
      'section2|10':{
        'list|10':[{
            'title':'@first',
            'price|99-1000':100,
            'intro': Random.paragraph(),
            'imgPath':Random.image('200x200', '#dec4e0', '#333', 'png', ''),
            'id':'@id'
          }],
          'banner':Random.image('400x100', '#b97cc9', '#FFF', 'png', 's2-banner')
      },
    
    
      'section3':{
          'list|4':[{
            'title':'@last',
            'start':Random.time('HH:mm'),
            // 在end数组里随机取一个
            'imgPath':Random.image('320x200', '#f5f2a5', '#333', 'png', ''),
            'id':'@id',
            'price|99-1000':100,
            'end|1':['2017/09/23 02:00:00','2017/09/23 11:00:00','2017/09/23 14:00:00','2017/09/23 13:00:00'],
          }],
    
          'banner':Random.image('400x100', '#30f673', '#FFF', 'png', 's3-banner'),
    
      },
    
    
      'section4':{
        'list|4':[{
          'title':'@first',
          'imgPath':Random.image('400x400', '#e2f630', '#333', 'png',''),
          'price|99-1000':100,
          'intro': Random.paragraph(),
          'id':'@id'
        }],
        'banner':Random.image('400x100', '#ffcc33','#FFF', 'png', 's4-banner')
      }
});