function main ()
{
    $('.clickable').on('click',function()
    {
        $(this).toggleClass('hidden');
    });
}
$(document).ready(main);