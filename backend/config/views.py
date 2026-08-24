from django.shortcuts import render


def axes_lockout_view(request, credentials=None, *args, **kwargs):
    """django-axes kilitlenme sayfası — özel tasarım."""
    return render(request, "axes/lockout.html", status=403)
