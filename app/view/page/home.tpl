{% extends '../template/page.tpl' %} {% block title %}
<div>这是Home页面</div>
<div>跳转去
    <a href="/">Index</a>页面</div>
{% endblock %} {% block pageScript %}
<script src="/public/home.bundle.js" language="JavaScript"></script>
{% endblock %}