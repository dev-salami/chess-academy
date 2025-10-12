from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Questionnaire(models.Model):
    title = models.CharField(max_length=255, unique=True)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title



 


class Qtaker(models.Model):
    chess_level = (("beginner", "Beginner"), ("intermediate","Intermediate"), ("expert", "Expert"))
    name = models.CharField(null=False, max_length=100 )
    age = models.IntegerField(blank=False, null=False)
    email = models.EmailField(null=True)
    skill = models.CharField(choices=chess_level, default="beginner")
    test_result = models.FloatField(null=True)

    @classmethod
    def get_next_skill(cls, current_skill):
        skills = [choice[0] for choice in cls.chess_level]  # Extract skill values from choices
        try:
            next_skill_index = skills.index(current_skill) + 1  # Get index of current skill + 1
            return skills[next_skill_index]  # Return the next skill
        except IndexError:
            return skills[-1]  # If current skill is the last, return the last skill again


class Question(models.Model):
    
    questionnaire = models.ForeignKey(Questionnaire, on_delete=models.CASCADE)
    question = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    # qtaker = models.ForeignKey(Qtaker, on_delete=models.CASCADE)
    placement = models.PositiveIntegerField()
    

    def __str__(self):
        return f"{str(self.questionnaire)} - Q{self.placement} {self.question}"
    
class Options(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    text = models.TextField()  # WYSIWYG editor in admin
    correct = models.BooleanField()

    def __str__(self):
        return self.text       