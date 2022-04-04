 // eslint-disable-next-line no-unused-vars
 function showMessage(content, type=0) {
                
    var alert_type = 'alert-success';
    var alert_content = '';
    if (type == 0) {
        alert_type = 'alert-success';
        alert_content = '<strong>Success!</strong>' + content;
    }                    
    if (type == 1) {
        alert_type = 'alert-warning';
        alert_content = '<strong>Warning!</strong>' + content;
    }
    if (type == 2) {
        alert_type = 'alert-danger';
        alert_content = '<strong>Danger!</strong>' + content;
    }
        
    var html = '<div class="alert ';
    html += alert_type; 
    html += ' alert-dismissible fade show"> <button type="button" class="btn-close" data-bs-dismiss="alert" onclick="javascript:this.style.opacity=0;"></button>';
    html += '<strong>Success!</strong>'
    html += alert_content;
    html + ' </div>';
    document.getElementById('message').innerHTML = html;
}