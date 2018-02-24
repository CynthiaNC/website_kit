{% extends '../template/page.tpl' %} {% block title %}
<title>Home</title> {% endblock %} {% block titleBlock %}
<div>这是
    <span class="emphsis light">Home </span>页面</div>
<div>跳转去
    <a href="/">Index</a>页面</div>
{% endblock %} {% block pageScript %}
<script src="/public/home.bundle.js" language="JavaScript"></script>
{% endblock %}