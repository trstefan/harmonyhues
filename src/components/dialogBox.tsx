import { Button } from "@/components/ui/button";
import { CircleHelp } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <CircleHelp
          className="h-6 w-6 text-neutral-800 transition-colors hover:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-400 cursor-pointer	"
          strokeWidth={1.5}
        />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Note</DialogTitle>
          <DialogDescription>
            These backgrounds are designed for full-page backgrounds. The
            preview may differ from the actual result. Please click
            &apos;Preview&apos; to test and adjust the settings as necessary
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
