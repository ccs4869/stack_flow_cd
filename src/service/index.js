import express from 'express'
import db from './db.js'
import cors from 'cors'

import bodyParser from 'body-parser'

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 注册
app.post('/register', (req, res) => {
  console.log(req.body);
  const userInfo = req.body
  const insStr = 'insert into users set ?'
  
  db.query(insStr, [{ username: userInfo.username, password: userInfo.password }], (err, insRes) => {
    if (err) return res.send({status:500,msg:err})
    res.send({
      status: 200,
      msg: 'register success',
      data:userInfo
    })
  })
});

// 登陆
app.post('/login', (req, res) => {

  console.log("body---------->",req.body);

  const userInfo = req.body
  const selStr = "select * from users where username = ?"
  db.query(selStr, userInfo.username, (err, selRes) => {
    // if (err) return res.cc(err)
    if (selRes.length !== 1) return res.send({
      status: 1,
      msg:'用户不存在'
    })
    // const state = bcrype.compareSync(userInfo.password,selRes[0].password)
    const state = userInfo.password === selRes[0].password
    if (!state) {
      return res.send({
        status: 1,
        msg:"密码错误"
      })
    }
    // const user = { ...selRes[0], password: '', user_pic: '' }
    // const token = jwb.sign(user,jwtSecretKey,{expiresIn})
    res.send({
      status: 0,
      msg: "登陆成功",
      // token:'Bearer ' + token
    })
  })
});

app.get('/posts', (req, res) => {
  const selStr = "select * from posts"
  db.query(selStr, (err, selRes) => {
    if (err) return res.send({ status:1,msg:err })
    res.send({
      status: 0,
      msg: "获取文章成功",
      data:selRes
    })
  })
});


app.post('/posts', (req, res) => {
  let { title, content, tags, description } = req.body
  // tags.length && (tags = tags.join())
  console.log(req.body);
  const insStr = `insert into posts(title,content,tags,description) values('${title}','${content}','${tags}','${description}');`
  db.query(insStr, (err, insRes) => {
    if (err) return res.send({status:500,msg:err})
    res.send({
      status: 200,
      msg: '发表文章成功',
      data: insRes
    })
  })
});



app.listen(3000, () => {
  console.log('Server started on port 3000');
});