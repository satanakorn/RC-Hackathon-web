from django.contrib import admin
from app.models import Problem

class ProblemAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'category')  # Customize displayed fields
    list_filter = ('category',)  # Add filters

admin.site.register(Problem, ProblemAdmin)
