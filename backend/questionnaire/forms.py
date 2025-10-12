from django import forms
from .models import Qtaker, Options


class Userform(forms.ModelForm):
    class Meta:
        model = Qtaker
        fields = "__all__"
        exclude = ['test_result']


class AnswerForm(forms.Form):
    options = forms.ModelChoiceField(
        queryset=Options.objects.all(), widget=forms.RadioSelect
    )

    def __init__(self, *args, **kwargs):
        question = kwargs.pop("question")
        super().__init__(*args, **kwargs)

        self.fields["options"].queryset = Options.objects.filter(question=question)
        