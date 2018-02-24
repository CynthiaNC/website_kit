<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="/public/app.css"> {% block title %}
    <title>Document</title> {% endblock %}
</head>

<body>
    {% block titleBlock %} {% endblock %}

    <div class="tips">
        Tips: 模板引擎使用
        <a href="https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/0014713964925087c29166d8c344a949364e40e2f28dc09000#0">Nunjucks</a>
    </div>

    <!-- 如果没有公用的方法，就不用加载utils -->
    <script src="/public/utils.bundle.js" language="JavaScript"></script>

    {% block pageScript %} {% endblock %}
</body>

</html>