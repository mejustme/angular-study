# angularѧϰ

## �ļ��ṹ

````
|     //���롢ѹ�����ϲ�������Ŀ¼
|       |-build
|           |-css
|               |-page //  �������ɵ�Ϊѹ���汾��css,ҳ�漶
|               |-common.min.css //  ͨ��ѹ��css
|           |-demos  // htmlҳ��
|           |-js
|               |-json // ģ������
|               |-page  // ����ѹ���ϲ���js, ҳ�漶
|       |-demos  //htmlҳ��
|       |-js     //δѹ����js, ҳ�漶
|       |-less     //δ�����less
|           |-mod  //ģ�黯��less
|           |-page  //ҳ�漶��less
|       |-node_modules //  �����Ĳ��ģ���
|-------.tpl    //  ����ҳ��Ľ��ּ�ģ��
|-------README.md
|-----.gitignore // Ĭ��ʹ��git�����ú�gitignore�ļ�
|-----Gruntfiles.js // grunt�����ļ�
|-----package.json //g runt�����������ļ�

````

#### ����Ŀ���ּ�

grunt webpage:pagename
���ģ��򵥲���Ҫjs�߼�����ִ��

grunt webpage:pagenam:true
ִ�к󣬻��Զ�������Ҫ���ļ�������һ�γ�ʼ��grunt����Ĭ��������۲������demoҳ,�Զ�����Ӧ���������ļ�

````
|-----pagename.html
|-----pagename.less
|-----pagename.js
````
### ��Ŀ����ص�

- ����webpage���ּܺ�ҳ��ģ�壬����������ҳ��
- less ģ�黯���룬�����������ģ���ļ���
- ʹ����wsui��ܣ�ʹ�������г
