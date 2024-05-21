import { Loader2 } from 'lucide-react'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'

interface ConfirmModalProps {
  title: string
  description: string
  disabled: boolean
  open: boolean
  setOpen: React.Dispatch<boolean>
  onContinue: () => void
}

const AlertModal = ({
  title,
  description,
  disabled,
  open,
  setOpen,
  onContinue
}: ConfirmModalProps) => {
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="sm:max-w-[425px]">
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogAction
            onClick={onContinue}
            disabled={disabled}
          >
            {disabled ? <Loader2 className="animate-spin" /> : 'Continue'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default AlertModal