import { Check, Trash } from '@phosphor-icons/react'
import { NoTasks } from './noTasks'
import styles from './tasks.module.css'
import * as Checkbox from '@radix-ui/react-checkbox'


export const Tasks = () => {
    return (
        <div className={styles.main}>
            <div className={styles.infoTasks}>
                <div className={styles.amountTasks}>Tarefas criadas<span>4</span></div>
                <div className={styles.tasksCompleted}>Concluídas<span>2 de 4</span></div>
            </div>
            <div className={styles.containerTasks}>
                {/* <NoTasks /> */}
                <ul className={styles.listTasks}>
                    <li className={styles.itemTask}>
                        <div className={styles.contentTask}>
                            <div>
                                <Checkbox.Root className={styles.CheckboxRoot} defaultChecked id="c1">
                                    <Checkbox.Indicator className={styles.CheckboxIndicator}>
                                        <Check size={16} weight="bold" color='#fff'/>
                                    </Checkbox.Indicator>
                                </Checkbox.Root>
                            </div>
                            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                            <button className={styles.deleteTask}><Trash size={18} weight="bold" /></button>
                        </div>
                    </li>
                    <li className={styles.itemTask}>
                        <div className={styles.contentTask}>
                            <div>
                                <Checkbox.Root className={styles.CheckboxRoot} defaultChecked id="c1">
                                    <Checkbox.Indicator className={styles.CheckboxIndicator}>
                                        <Check size={16} weight="bold" color='#fff'/>
                                    </Checkbox.Indicator>
                                </Checkbox.Root>
                            </div>
                            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                            <button className={styles.deleteTask}><Trash size={18} weight="bold" /></button>
                        </div>
                    </li>
                    <li className={styles.itemTask}>
                        <div className={styles.contentTask}>
                            <div>
                                <Checkbox.Root className={styles.CheckboxRoot} defaultChecked id="c1">
                                    <Checkbox.Indicator className={styles.CheckboxIndicator}>
                                        <Check size={16} weight="bold" color='#fff'/>
                                    </Checkbox.Indicator>
                                </Checkbox.Root>
                            </div>
                            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                            <button className={styles.deleteTask}><Trash size={18} weight="bold" /></button>
                        </div>
                    </li>
                    <li className={styles.itemTask}>
                        <div className={styles.contentTask}>
                            <div>
                                <Checkbox.Root className={styles.CheckboxRoot} defaultChecked id="c1">
                                    <Checkbox.Indicator className={styles.CheckboxIndicator}>
                                        <Check size={16} weight="bold" color='#fff'/>
                                    </Checkbox.Indicator>
                                </Checkbox.Root>
                            </div>
                            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                            <button className={styles.deleteTask}><Trash size={18} weight="bold" /></button>
                        </div>
                    </li>
                    <li className={styles.itemTask}>
                        <div className={styles.contentTask}>
                            <div>
                                <Checkbox.Root className={styles.CheckboxRoot} defaultChecked id="c1">
                                    <Checkbox.Indicator className={styles.CheckboxIndicator}>
                                        <Check size={16} weight="bold" color='#fff'/>
                                    </Checkbox.Indicator>
                                </Checkbox.Root>
                            </div>
                            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                            <button className={styles.deleteTask}><Trash size={18} weight="bold" /></button>
                        </div>
                    </li>
                    <li className={styles.itemTask}>
                        <div className={styles.contentTask}>
                            <div>
                                <Checkbox.Root className={styles.CheckboxRoot} defaultChecked id="c1">
                                    <Checkbox.Indicator className={styles.CheckboxIndicator}>
                                        <Check size={16} weight="bold" color='#fff'/>
                                    </Checkbox.Indicator>
                                </Checkbox.Root>
                            </div>
                            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                            <button className={styles.deleteTask}><Trash size={18} weight="bold" /></button>
                        </div>
                    </li>
                    <li className={styles.itemTask}>
                        <div className={styles.contentTask}>
                            <div>
                                <Checkbox.Root className={styles.CheckboxRoot} defaultChecked id="c1">
                                    <Checkbox.Indicator className={styles.CheckboxIndicator}>
                                        <Check size={16} weight="bold" color='#fff'/>
                                    </Checkbox.Indicator>
                                </Checkbox.Root>
                            </div>
                            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                            <button className={styles.deleteTask}><Trash size={18} weight="bold" /></button>
                        </div>
                    </li>
                    <li className={styles.itemTask}>
                        <div className={styles.contentTask}>
                            <div>
                                <Checkbox.Root className={styles.CheckboxRoot} defaultChecked id="c1">
                                    <Checkbox.Indicator className={styles.CheckboxIndicator}>
                                        <Check size={16} weight="bold" color='#fff'/>
                                    </Checkbox.Indicator>
                                </Checkbox.Root>
                            </div>
                            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                            <button className={styles.deleteTask}><Trash size={18} weight="bold" /></button>
                        </div>
                    </li>
                    <li className={styles.itemTask}>
                        <div className={styles.contentTask}>
                            <div>
                                <Checkbox.Root className={styles.CheckboxRoot} defaultChecked id="c1">
                                    <Checkbox.Indicator className={styles.CheckboxIndicator}>
                                        <Check size={16} weight="bold" color='#fff'/>
                                    </Checkbox.Indicator>
                                </Checkbox.Root>
                            </div>
                            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                            <button className={styles.deleteTask}><Trash size={18} weight="bold" /></button>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    )
}