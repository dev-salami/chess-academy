from .models import Question


def get_next_question(question):
    next_question = (
        Question.objects.filter(
            questionnaire= question.questionnaire, placement__gt=question.placement
        )
        .order_by("placement")
        .first()
    )
    return next_question
