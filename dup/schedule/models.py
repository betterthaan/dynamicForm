from django.db import models

class Work(models.Model):
    name_work = models.CharField("Работа", max_length=100, default='Job1')
    release_dates = models.PositiveIntegerField("Release dates", default = 0)
    due_dates = models.PositiveIntegerField("Due dates", default = 0)
   
   
    def __str__(self):
        return self.name_work

    class Meta:
        verbose_name = "Работа"
        verbose_name_plural = "Работы"
