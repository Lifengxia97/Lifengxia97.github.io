var spawn = require('child_process').exec;


// Hexo 3 �û��������
hexo.on('new', function(data){
  spawn('start  "C:\Program Files\Typora\Typora.exe" ' + data.path);
});
