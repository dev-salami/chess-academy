from django.shortcuts import render

# Create your views here.
from django.shortcuts import render, redirect, get_object_or_404
import sys
from .models import Questionnaire,Question,Qtaker,Options
from .forms import AnswerForm, Userform
from .utils import get_next_question

# Create your views here.
def QtakerView(request):
    if request.method == "POST" :
        form = Userform(request.POST)
        if form.is_valid():
            form.save()
            qtaker=Qtaker.objects.last()
            skill = qtaker.skill
            questionnaire = Questionnaire.objects.get(title=skill)
            questions = Question.objects.filter(questionnaire=questionnaire).order_by("placement")
            question = questions.first()
            return redirect("quiz_question", qtaker.id, question.id)
        else:
            return render(request,"details.html", {"form":form})
    else:
        form = Userform()
        return render(request, "details.html",{"form":form})    


def quiz(request,Qtakerid,question_id):
    qtaker = get_object_or_404(Qtaker,id=Qtakerid)
    skill = qtaker.skill
    questionnaire = Questionnaire.objects.get(title=skill)
    questions = Question.objects.filter(questionnaire=questionnaire).order_by("placement")

    if question_id is None:
#         # Starting the quiz
        request.session["score"] = 0
        current_question = questions.first()
    else:
        current_question = get_object_or_404(Question, id=question_id)

    if request.method == "POST":
        form = AnswerForm(request.POST, question=current_question)
        if form.is_valid():
            answer = form.cleaned_data["options"]
            return redirect("quiz_answer", Qtakerid=qtaker.id, id=answer.pk)

    else:
        form = AnswerForm(request.POST, question=current_question)  

    return render(
        request,
        "quiz.html",
        {   "qtaker":qtaker,
            "question": current_question,
            "questionnaire": questionnaire,
            "form": form,
        },
    )      

def view_answer(request, Qtakerid, id):
    answer = get_object_or_404(Options, pk=id)
    question = answer.question
    qtaker = get_object_or_404(Qtaker, id=Qtakerid)
    
    correct_answer = Options.objects.filter(question=question, correct=True).first()
    next_question = get_next_question(question)
    score = request.session.get("score", 0)
    if answer.correct:
        score += 1
        request.session["score"] = score
    return render(
        request,
        "quiz_answer.html",
        {
            "qtaker":qtaker,
            "answer": answer,
            "correct": correct_answer,
            "question": question,
            "next_question": next_question,
            "score": score,
            
        },
    )

def result(request, Qtakerid):
    qtaker = get_object_or_404(Qtaker, id=Qtakerid)
    score = request.session.get("score", 0)
    skill = qtaker.skill
    questionnaire = Questionnaire.objects.get(title=skill)
    total = Question.objects.filter(questionnaire=questionnaire).count()
    print(score)
    print(total)
    percent = score * 100 / total
    print(percent)
    qtaker.test_result = percent
    request.session.clear()
    qtaker.save()
    next_skill = Qtaker.get_next_skill(skill)
    qtaker.skill = next_skill
    qtaker.save()
    next_questionnaire = Questionnaire.objects.get(title=next_skill)
    questions = Question.objects.filter(questionnaire=next_questionnaire).order_by("placement")
    question = questions.first()
    
        
    
    return render(request, "result.html", {"questionnaire":questionnaire, "qtaker":qtaker, "question":question})

# from django.contrib import messages


# def result(request, Qtakerid):
#     qtaker = get_object_or_404(Qtaker, id=Qtakerid)
#     try:
#         score = request.session.get("score", 0)
#     except KeyError:
#         score = 0

#     skill = qtaker.skill
#     questionnaire = Questionnaire.objects.get(title=skill)
#     total = Question.objects.filter(questionnaire=questionnaire).count()
#     percent = (score * 100) / total if total else 0

#     messages.success(request, f"You scored {percent:.2f}% on the {questionnaire.title} questionnaire.")
    
#     # Update the questionnaire test result
#     questionnaire.test_result = percent
#     questionnaire.save()

#     # Determine if there is a next skill
#     next_skill = qtaker.get_next_skill(skill)
#     if next_skill:
#         next_questionnaire = Questionnaire.objects.get(title=next_skill)
#         questions = Question.objects.filter(questionnaire=next_questionnaire).order_by("placement")
#         next_question = questions.first() if questions else None
#     else:
#         next_question = None

#     # Clear the score from the session
#     if 'score' in request.session:
#         del request.session['score']

#     # Redirect to the next question or a summary page
#     # if next_question:
#     #     return redirect('quiz_question', Qtaker.id, next_question.id)
#     # else:
#     #     # No more questions, redirect to a summary or completion page
#     #     return redirect('summary', Qtaker.id)

#     # If not a POST request, render the result page
#     return render(request, "result.html", {
#         "questionnaire": questionnaire,
#         "qtaker": qtaker,
#         "question": next_question,
#     })



















# def quiz(request, id,question_id=None):
#     questionnaire = get_object_or_404(Questionnaire,id=id)
#     questions = Question.objects.filter(questionnaire=questionnaire).order_by("placement")
#     sys.stdout.write(f"Course questions: {questions}\n")
#     if question_id is None:
#         # Starting the quiz
#         request.session["score"] = 0
#         current_question = questions.first()
#     else:
#         current_question = get_object_or_404(Question, id=question_id)

#     if request.method == "POST":
#         form = AnswerForm(request.POST, question=current_question)
#         if form.is_valid():
#             answer = form.cleaned_data["answer"]
#             # EmployeeTest.objects.create(
#             #    employee_course=emp_course, question=current_question, answer=answer
#             # )
#             return redirect("", id=answer.pk)

#     else:
#         form = AnswerForm(request.POST, question=current_question)

#     return render(
#         request,
#         "learning/test.html",
#         {
#             "question": current_question,
#             "course": course,
#             "form": form,
#         },
#     )

#     return render(request,"base.html")