"use client"

import { useState } from "react"
import { CloudIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { motion, AnimatePresence } from "framer-motion"

export default function OnboardingForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    workshopName: "",
    workshopDescription: "",
    workshopImage: null as File | null,
    fullName: "",
    username: "",
    password: "",
    adminImage: null as File | null,
  })

  const nextStep = () => setStep(2)
  const prevStep = () => setStep(1)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold">Onboarding</h1>
          <Progress value={step === 1 ? 50 : 100} className="h-2" />
          <div className="flex justify-center space-x-2 text-sm text-muted-foreground">
            <span className={step === 1 ? "font-medium text-primary" : ""}>1</span>
            <span>—</span>
            <span className={step === 2 ? "font-medium text-primary" : ""}>2</span>
          </div>
        </div>

        <AnimatePresence mode="wait" initial={false}>
          {step === 1 ? (
            <motion.div
              key="step1"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
            >
              <div className="space-y-6">
                <div className="space-y-2 text-center">
                  <h2 className="text-xl font-medium">Datos del taller</h2>
                  <p className="text-sm text-muted-foreground">
                    Complete el formulario proporcionando con la información del taller que desea administrar
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-dashed border-muted">
                      <label htmlFor="workshop-avatar" className="cursor-pointer">
                        <CloudIcon className="h-12 w-12 text-muted-foreground" />
                        <input
                          type="file"
                          id="workshop-avatar"
                          className="hidden"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0]
                            if (file) setFormData({ ...formData, workshopImage: file })
                          }}
                        />
                      </label>
                    </div>
                    <span className="text-sm text-muted-foreground">Foto de perfil para el taller (opcional)</span>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="workshop-name">Nombre del taller</Label>
                    <Input
                      id="workshop-name"
                      placeholder="Nombre Taller (requerido)"
                      value={formData.workshopName}
                      onChange={(e) => setFormData({ ...formData, workshopName: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Descripción</Label>
                    <Textarea
                      id="description"
                      placeholder="Descripción taller (opcional)"
                      className="min-h-[100px]"
                      value={formData.workshopDescription}
                      onChange={(e) => setFormData({ ...formData, workshopDescription: e.target.value })}
                    />
                  </div>

                  <div className="flex justify-end space-x-2">
                    <Button onClick={nextStep}>Siguiente</Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="step2"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
            >
              <div className="space-y-6">
                <div className="space-y-2 text-center">
                  <h2 className="text-xl font-medium">Datos de usuario admin</h2>
                  <p className="text-sm text-muted-foreground">
                    Ingrese los datos del usuario administrador. Este usuario tendrá permisos para gestionar la
                    configuración general del taller.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-dashed border-muted">
                      <label htmlFor="admin-avatar" className="cursor-pointer">
                        <CloudIcon className="h-12 w-12 text-muted-foreground" />
                        <input
                          type="file"
                          id="admin-avatar"
                          className="hidden"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0]
                            if (file) setFormData({ ...formData, adminImage: file })
                          }}
                        />
                      </label>
                    </div>
                    <span className="text-sm text-muted-foreground">Foto de perfil (opcional)</span>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="full-name">Nombre completo</Label>
                    <Input
                      id="full-name"
                      placeholder="Nombre de la persona (requerido)"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="username">Usuario</Label>
                    <Input
                      id="username"
                      placeholder="Usuario (requerido)"
                      value={formData.username}
                      onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Contraseña</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••••••"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      required
                    />
                  </div>

                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={prevStep}>
                      Anterior
                    </Button>
                    <Button type="submit">Finalizar</Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

