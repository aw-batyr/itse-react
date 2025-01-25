// import { FormType } from "@/lib/get-b2b-form-details";
// import { useFormStore } from "@/store/form";
// import { useCallback } from "react";
// import { UseFormReturn } from "react-hook-form";

// interface ReturnProps {
//   handleNext: VoidFunction;
// }

// export const useB2bForm = (form: UseFormReturn<FormType>) => {
//   const [stage, setStage] = useFormStore((state) => [
//     state.stage,
//     state.setStage,
//   ]);

//   const getFieldsForStage = (currentStage: number): (keyof FormType)[] => {
//     switch (currentStage) {
//       case 1:
//         return [
//           "type",
//           "company_name",
//           "representative_name",
//           "job_title",
//           "participants_number",
//           "country",
//           "email_address",
//           "phone_number",
//           "website",
//         ];
//       case 2:
//         return [
//           "meeting_objective",
//           "proposal_description",
//           "government_agency",
//           "sector_industry",
//           "key_services",
//           "government_experience",
//         ];
//       case 3:
//         return [
//           "preferred_meeting_datetime",
//           "meeting_mode",
//           "language_preference",
//           "technical_requirements",
//           "company_profile",
//           "proposal_presentation",
//           "relevant_certification",
//         ];
//       default:
//         return [];
//     }
//   };

//   const handleNext = useCallback(async () => {
//     const fieldsToValidate = getFieldsForStage(stage);
//     const isValid = await form.trigger(fieldsToValidate);

//     if (isValid && stage < 3) {
//       setStage((prev: number) => {
//         if (prev === stage) {
//           console.warn("Попытка установить тот же stage, цикл предотвращен");
//           return prev; // предотвращаем бесконечный цикл
//         }
//         return prev + 1;
//       });
//     }
//   }, [stage, form]);

//   return { handleNext };
// };
