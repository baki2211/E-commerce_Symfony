document.addEventListener('DOMContentLoaded', function () {
    let popoverTriggerEl = document.getElementById('popover-account-list');
    let popoverContent = document.getElementById('popover-content').innerHTML
    let popover = new bootstrap.Popover(popoverTriggerEl, {
        html: true,
        content: popoverContent,
        placement: 'bottom'
    });
});

        document.addEventListener('DOMContentLoaded', function () {
    let popoverTriggerEl = document.getElementById('popover-address');
    let popoverContent = document.getElementById('popover-address-content').innerHTML
    let popover = new bootstrap.Popover(popoverTriggerEl, {
        html: true,
        content: popoverContent,
        placement: 'bottom'
    });
});