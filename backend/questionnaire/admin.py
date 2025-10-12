from django.contrib import admin

# Register your models here.
from .models import (
    Qtaker,Question,Questionnaire,Options
)

@admin.register(Qtaker)
class QtakerAdmin(admin.ModelAdmin):
    list_display = ["name","age","email","skill","test_result"]

class AnswerInline(admin.TabularInline):
    model = Options    

@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ["questionnaire","question","placement","created_at","updated_at","created_by"]
    inlines = [AnswerInline]

@admin.register(Questionnaire)   
class QuestionnaireAdmin(admin.ModelAdmin):
    list_display = ["title", "description", "created_at", "created_by"] 

