{% extends '../template/page.tpl' %} {% block title %}
<div>这是Index页面</div>
<div>跳转去
    <a href="/home">Home</a>页面</div>
{% endblock %} {% block pageScript %}
<script src="/public/index.bundle.js" language="JavaScript"></script>
{% endblock %}