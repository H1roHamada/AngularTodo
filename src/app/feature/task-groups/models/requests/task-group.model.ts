import { TaskGroupColorsEnum } from '../../../../shared/enums/task-group-colors.enum';

export interface TaskGroupBaseModel{
  name: string;
  color: TaskGroupColorsEnum;
}
