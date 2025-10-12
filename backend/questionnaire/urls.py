from django.urls import path
from . import views

urlpatterns = [
    # path("quiz", views.quiz, name="quiz"),
    # path("quiz/<int:Qtakerid>", views.quiz, name="quiz"),
    path(
        "quiz/<int:Qtakerid>/<int:question_id>/",
        views.quiz,
        name="quiz_question",
    ),
    path("answer/<int:Qtakerid>/<int:id>/", views.view_answer, name="quiz_answer"),
    path("result/<int:Qtakerid>", views.result, name="result"),
    path("", views.QtakerView, name="details")
]