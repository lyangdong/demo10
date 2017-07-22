$(function() {
    myFunc('000000000000',1);
    $('select').change(function () {
        var id = $(this).val();
        myFunc(id,$(this).next().index()+1);
        if(id == '请选择'){
            $(this).nextAll().hide();
        }else{
            $(this).next().show()
        }
    })
});

function myFunc(id,level){
    $.ajax({
        url: 'http://api.dangqian.com/apidiqu2/api.asp',
        type: 'get',
        dataType: 'jsonp',
        data: {
            id: id
        },
        success: function (res) {
            var html = '<option>请选择</option>';
            for (var x in res.list) {
                html += '<option value="'+ res.list[x].daima +'">' + res.list[x].diming + '</option>';
            }
            $('.level-'+ level).html(html);
        }
    })
}
